import { createContext } from "react";

export const AppContext = createContext({

	saveFiled: [{
		entrance: '',
		left: '',
		name: '',
		lastName: '',
		nationalCode: '',
		phoneNumber: '',
		liveCity: '',
		job: '',
		education: '',
		favorites: '',
		reservationRoom: ''
	}],

	setSaveFiled: () => {

	}

});