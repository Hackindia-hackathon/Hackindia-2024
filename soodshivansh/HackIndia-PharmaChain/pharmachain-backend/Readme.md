initial setup commmands:

truffle(development)> let instance = await MedicineSupplyChain.deployed();
truffle(development)> await instance.registerMedicine(101, "Paracetamol", "ABC Pharma", "2025-12-31", { from: "0x24dc4b77D3fE74696349172a9AB851195a4195f4" });
truffle(development)> await instance.updateMedicineStatus(101, "shipped", { from: "0x24dc4b77D3fE74696349172a9AB851195a4195f4" });
truffle(development)> let med = await instance.medicines(101);
truffle(development)> console.log(med);



const userTransactions = await instance.getUserTransactions({ from: "0x24dc4b77D3fE74696349172a9AB851195a4195f4" });
console.log(userTransactions);


const medicineDetails = await instance.getMedicineDetails(101);
console.log(medicineDetails);


