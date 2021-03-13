const express = require("express");
const router = express.Router();

const TreatmentModel = require("../models").Treatment;
const AilmentModel = require("../models").Ailment;
const LocationsModel = require("../models").Locations;
const OrganModel = require("../models").Organ;
const PointsModel = require("../models").Points;


// GET ALL TREATMENT PROFILE
router.get("/", async (req, res) => {
  let allTreatment = await TreatmentModel.findAll({
    include:[
        {
          model: AilmentModel,
          attributes: ['ailment', 'ailmentdetails', 'notes']
        },
        {
          model: OrganModel,
          attributes: ['organ'],
        },
        {
          model: PointsModel,
          attributes: ['points'],
        },
        {
          model: LocationsModel,
          attributes: ['locations'],
        },
    ]})
  res.json({ allTreatment });
});

// GET SPINE TREATMENT PROTOCOLS
/*
Posts.findAll({
  include: [{
    model: User,
    where: {year_birth: 1984}
   }]
}).then(posts => {

});
*/
router.get("/:organname", async (req, res) => {
  let allTreatment = await TreatmentModel.findAll({
    include:[
        {
          model: AilmentModel,
          attributes: ['ailment', 'ailmentdetails', 'notes']
        },
        {
          model: OrganModel,
          attributes: ['organ'],
          where:{organ: req.params.organname},
        },
        {
          model: PointsModel,
          attributes: ['points'],
        },
        {
          model: LocationsModel,
          attributes: ['locations'],
        },
    ]})
  res.json({ allTreatment });
});

module.exports = router;
