/**
 * GET/
 * Homepage
 */

exports.homepage = async (req, res) => {
    const locals = {
        title: "Notess",
        description: "Your Free Notes App.",
    }

    res.render('index', {
        locals,
        layout: '../views/layouts/front-page'
    });
}

/**
 * GET/
 * About
 */

exports.about = async (req, res) => {
    const locals = {
        title: "About - Notess",
        description: "Your Free Notes App.",
    }

    res.render('about', locals);
}