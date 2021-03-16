const { Router } = require('express');
const Todo = require('../modals/Todo');
const router = Router();


router.get('/', async (req, res) => {
    const todos = await Todo.find({})

    res.render('index', {
        title: 'Todos List',
        isIndex: true,
        todos
    })
});


router.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create Todo',
        isCreate: true
    })
});

module.exports = router;

