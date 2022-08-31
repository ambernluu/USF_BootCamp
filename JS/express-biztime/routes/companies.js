const express = require("express");
const ExpressError = require("../expressError")
const router = express.Router();
const db = require("../db");

router.get('/', async (req, res, next) => {
    try {
        const results = await db.query(
            `SELECT * FROM companies`);
        //debugger;
        return res.json({ companies: results.rows });
    } catch (e) {
        return next(e);
    }

})

router.get('/:code', async (req, res, next) => {
    try {
        const { code } = req.params;
        const companyResults = await db.query(`
        SELECT * FROM companies
        WHERE code=$1`, [code]);

        const invResults = await db.query(`
        SELECT * FROM invoices
        WHERE comp_code=$1`, [code]);

        if (companyResults.rows.length === 0) {
            throw new ExpressError(`Can't find user with code of ${code}`, 404)
        }

        const company = companyResults.rows[0];
        const invoices = invResults.rows;

        company.invoices = invoices.map(inv => inv.id);

        return res.send({ company: company })
    } catch (e) {
        return next(e)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const { code, name, description } = req.body;
        const results = await db.query('INSERT INTO companies (code, name, description) VALUES ($1, $2, $3) RETURNING *', [code, name, description]);
        return res.status(201).json({ company: results.rows[0] });
    } catch (e) {
        return next(e);
    }
})

router.put('/:code', async (req, res, next) => {
    try {
        const { code } = req.params;
        const { name, description } = req.body;
        const results = await db.query('UPDATE companies SET name=$1, description=$2 WHERE code=$3 RETURNING code, name, description', [name, description, code]);
        if (results.rows.length === 0) {
            throw new ExpressError(`Can't update company with code of ${code}`, 404)
        }
        return res.send({ company: results.rows[0] });
    } catch (e) {
        return next(e);
    }
})

router.delete('/:code', async (req, res, next) => {
    try {
        const results = db.query('DELETE FROM companies WHERE code = $1', [req.params.code])
            ;
        return res.send({ msg: "DELETED" });
    } catch (e) {
        return next(e);
    }
})

module.exports = router;