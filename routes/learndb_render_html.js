const learnDbHTMLRender = (request, response, htmlPath, statusMsg) => {
    response.render(htmlPath, {
        status: statusMsg
    })
}

export { learnDbHTMLRender }