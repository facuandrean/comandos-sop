const getViewCommands = (req, res) => {
    res.render("index", { title: "Comandos de linux" })
};

const getViewBash = (req, res) => {
    res.render("bash", { title: "Programación en Bash" })
};

const getViewTips = (req, res) => {
    res.render("tips", { title: "Tips o formas de uso de los comandos" })
};


export default {
    getViewCommands,
    getViewTips,
    getViewBash
}