const learnDbHTMLRender = (request, response, htmlPath, statusMsg) => {
    return new Promise((resolve, reject) => {
        resolve(response.render(htmlPath, {
            status: statusMsg
        }))
    })
}

const learnDbHTMLRenderResults = (request, response, htmlPath, statusMsg, technology, subject, description) => {
    return new Promise((resolve, reject) => {
        resolve(response.render(htmlPath, {
            status: statusMsg,
            tech: technology,
            subject: subject,
            description: description
        }))
    })
}

export { learnDbHTMLRender, learnDbHTMLRenderResults }