@app.websocket("/ws/{token}")
async def websocket_endpoint(websocket: WebSocket, token: str):
    await manager.connect(websocket, token)
    while True:
        data = await websocket.receive_text()
        await manager.broadcast(data, token)


app.mount("/static", StaticFiles(directory="static"), name="static")

templates = Jinja2Templates(directory="templates")

@app.get("/unlim/{unlim_key}", response_class=HTMLResponse)
async def get_started(request: Request, unlim_key: str):
    request.session['unlim_access'] = True if unlim_key == UNLIM_KEY else False
    return RedirectResponse("/chat", status_code=302)