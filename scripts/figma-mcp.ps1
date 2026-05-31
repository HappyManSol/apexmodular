param(
  [string]$Tool = "get_design_context",
  [string]$ServerUrl = "http://127.0.0.1:3845/mcp"
)

function Invoke-McpRequest {
  param(
    [hashtable]$Body,
    [string]$SessionId = $null
  )

  $headers = @{
    "Content-Type" = "application/json"
    "Accept" = "application/json, text/event-stream"
  }
  if ($SessionId) {
    $headers["Mcp-Session-Id"] = $SessionId
  }

  $json = $Body | ConvertTo-Json -Depth 10 -Compress
  $response = Invoke-WebRequest -Uri $ServerUrl -Method POST -Headers $headers -Body $json -UseBasicParsing

  $session = $response.Headers["Mcp-Session-Id"]
  $text = $response.Content

  $dataLines = $text -split "`n" | Where-Object { $_ -like "data: *" }
  $parsed = @()
  foreach ($line in $dataLines) {
    $parsed += ($line -replace "^data: ", "") | ConvertFrom-Json
  }

  return @{
    SessionId = if ($session) { $session[0] } else { $SessionId }
    Messages = $parsed
  }
}

$init = Invoke-McpRequest -Body @{
  jsonrpc = "2.0"
  id = 1
  method = "initialize"
  params = @{
    protocolVersion = "2024-11-05"
    capabilities = @{}
    clientInfo = @{ name = "apexmodular"; version = "1.0" }
  }
}

$sessionId = $init.SessionId
if (-not $sessionId) {
  Write-Error "Failed to initialize MCP session"
  exit 1
}

Invoke-McpRequest -SessionId $sessionId -Body @{
  jsonrpc = "2.0"
  method = "notifications/initialized"
  params = @{}
} | Out-Null

$tools = Invoke-McpRequest -SessionId $sessionId -Body @{
  jsonrpc = "2.0"
  id = 2
  method = "tools/list"
  params = @{}
}

$tools.Messages | ConvertTo-Json -Depth 20

if ($Tool -ne "list") {
  $call = Invoke-McpRequest -SessionId $sessionId -Body @{
    jsonrpc = "2.0"
    id = 3
    method = "tools/call"
    params = @{
      name = $Tool
      arguments = @{}
    }
  }
  $call.Messages | ConvertTo-Json -Depth 30
}
