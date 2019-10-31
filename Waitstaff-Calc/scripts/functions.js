import store from './store.js';

function findPlateId(id) {
	return this.store.charges.find((i) => i.id === id);
}

function calcTax(id, taxRate) {
	let taxResult = this.store.total * taxRate;
	return taxResult;
}

function calcTip(id) {
	let totalTip = this.store.charges.tip * this.store.charges.subtotal;
	return totalTip;
}

function calcTotal(id) {
	let totalResult = this.store.charges.subtotal + calcTax(id);
}

export default {
	calcTotal,
	calcTax,
	calcTip,
	findPlateId
};
