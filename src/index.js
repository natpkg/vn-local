const provinces = require("./jsonFiles/provinces");
const districts = require("./jsonFiles/districts");
const wards = require("./jsonFiles/wards");
const provincesTree = require("./jsonFiles/provincesTree");
const districtsTree = require("./jsonFiles/districtsTree");
module.exports = {
  getProvinces: () => provinces,
  getDistricts: () => districts,
  getWards: () => wards,
  getDistrictsByProvinceCode: (provinceCode) => provincesTree[provinceCode],
  getWardsByDistrictCode: (districtCode) => districtsTree[districtCode],
};