import functions from './functions.js';

let store = [
	((charges = {
		customerId: cuid(),
		subtotal: subtotal,
		tip: tip,
		totalPrice: totalPrice
	}),
	(earnings = {
		tipTotal: tipTotal,
		mealCount: mealCount,
		avgTipPerMeal: avgTipPerMeal
	}))
];
