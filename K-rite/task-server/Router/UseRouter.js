const router = require('express').Router()
const krite = require('../Modal/UserSchema')
const kdata = require('../Modal/SignupSchema')

router.post('/kritepost', async (req, res) => {
    console.log("postman data ?", req.body); //The req.body contains the data sent in the POST request by a client

    const task = new krite({
        title: req.body.title,
        description: req.body.description,
        duedate: req.body.duedate
    })
    console.log('task', task);


    try {
        const saveproduct = task.save()
        res.status(200).json(saveproduct)
    }
    catch (err) {
        console.log();
        res.status(500).json(err)
    }

})


router.get('/kriteget', async (req, res) => {
    console.log('gettt', req.body);
    try {
        const datas = await krite.find()
        console.log(datas);
        res.status(200).json(datas)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete('/kritedelete/:id', async (req, res) => {
    try {
        const res = await krite.findByIdAndDelete(req.params.id)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.put('/kriteupdate', async (req, res) => {
    console.log('**********************', req.body);
    console.log('req!!', req.query.id);
    try {
        console.log("hello", req.body);
        console.log("iddd", req.query.id);
        const DBdata = await krite.findByIdAndUpdate(req.query.id, {
            $set: {

                title: req.body.title,
                description: req.body.description,
                duedate: req.body.duedate,

            }
        })
        console.log("haiii", DBdata);
        res.status(200).json(DBdata)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})


router.get('/kritegeItemss/:id', async (req, res) => {
    console.log('req', req.body);
    console.log('iddddddd', req.params.id);
    try {
        const getitemssss = await krite.findById(req.params.id)
        console.log('dataaatatta', getitemssss);
        res.status(200).json(getitemssss)
    } catch (err) {
        console.log(err);
    }
})


router.post('/postdata', async (req, res) => {
    console.log('order-user-data', req.body);
    try {
        const User = await kdata({
            firstname: req.body.firstname,
            email: req.body.email,
            password: req.body.password,
           
        })
        console.log('usr-ordr', User);

        const SavedData = await User.save()
        res.status(200).json(SavedData)
        console.log('order-SavedData', SavedData);
    } catch (error) {
        res.status(400).json(error)
    }
})


module.exports = router
