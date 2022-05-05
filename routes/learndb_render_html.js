const learnDbHTMLRender = (request, response, htmlPath, learnTech, learnSubject, learnTags, learnDescription) => {
    response.render(htmlPath, {
        technology: learnTech,
        subject: learnSubject,
        description: learnTags,
        statusMsg: learnDescription
    })
}

export { learnDbHTMLRender }