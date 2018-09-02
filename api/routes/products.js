const experss = require('express');

const router = experss.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling get request to /products'
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'Handling get request to /products'
        });
    }
});


router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling post request to /products'
    });
});

router.delete('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling delte request to /products'
    });
});

router.patch('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling patch request to /products'
    });
});

module.exports = router;