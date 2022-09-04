const express = require("express");
const ExpressError = require("../expressError")
const router = express.Router();
const db = require("../db");

router.get('/', async (req, res, next) => {
    try {
        const results = await db.query(
            `SELECT * FROM invoices`);
        //debugger;
        return res.json({ invoices: results.rows });
    } catch (e) {
        return next(e);
    }

})

router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const results = await db.query('SELECT * FROM invoices INNER JOIN companies ON (invoices.comp_code = companies.code) WHERE id = $1', [id])
        if (results.rows.length === 0) {
            throw new ExpressError(`Can't find invoice with id of ${id}`, 404)
        }
        return res.send({ invoice: results.rows[0] })
    } catch (e) {
        return next(e)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const { comp_code, amt } = req.body;
        const results = await db.query('INSERT INTO invoices (comp_code, amt) VALUES ($1, $2) RETURNING *', [comp_code, amt]);
        return res.status(201).json({ invoice: results.rows[0] });
    } catch (e) {
        return next(e);
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const { amt, paid } = req.body;
        let paid_date;

        const getInvoice = await db.query(`
            SELECT paid, paid_date FROM invoices
            WHERE id = $1
        `, [id]);
     
        if (getInvoice.rows[0].paid === false || paid === false) {
            paid_date = null;
        }
        else {
            paid_date = getInvoice.rows[0].paid_date;
        }
        if (paid) {
            paid_date = new Date();
        }
        const results = await db.query(`
        UPDATE invoices
        SET amt=$1, paid=$2, paid_date=$3
        WHERE id=$4
        RETURNING id, comp_code, amt, paid, add_date, paid_date`, [amt, paid, paid_date, id]);
        if (results.rows.length === 0) {
            throw new ExpressError(`Can't update invoice with id of ${id}`, 404)
        }
        return res.send({ invoice: results.rows[0] });
        

        // const results = await db.query(`
        // UPDATE invoices 
        // SET amt=$1
        // WHERE id=$2
        // RETURNING id, comp_code, amt, paid, add_date, paid_date`, [amt, id]);
        // if (results.rows.length === 0) {
        //     throw new ExpressError(`Can't update invoice with id of ${id}`, 404)
        // }
        // return res.send({ invoice: results.rows[0] });
    } catch (e) {
        return next(e);
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const results = db.query('DELETE FROM invoices WHERE id = $1', [req.params.id]);
        return res.send({ msg: "DELETED" });
    } catch (e) {
        return next(e);
    }
})

module.exports = router;