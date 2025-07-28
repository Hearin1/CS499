/* GET Career Reflection Journal page */
const journal = (req, res) => {
    res.render('journal', { title: 'Career Reflection Journal'});
};

module.exports = {
    journal
};
