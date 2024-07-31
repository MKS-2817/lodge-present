import { createContext } from "react";

export const AppContext = createContext({

	saveFiled: [{
		entrance: '',
		left: '',
		name: '',
		lastName: '',
		nationalCode: '',
		birthday: '',
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