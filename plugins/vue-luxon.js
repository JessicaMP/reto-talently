import Vue from 'vue'
import VueLuxon from "vue-luxon";
Vue.use(VueLuxon, {
    templates: {
		serverAMS: {
			zone: "Europe/Amsterdam",
			format: "dd-MM-yyyy HH:mm:ss"
		},
        serverUTC: {
			zone: "UTC",
			format: "yyyy-MM-dd HH:mm:ss"
		},
        clientAMS: {
            zone: "Europe/Amsterdam",
			format: "med"
        }
	},
    input: {
        zone: "utc",
        format: "iso"
    },
    output: {
        zone: "local",
        format: {
            year: "numeric",
            month: "long",
            day: "numeric"
        },
        locale: null,
        relative: {
            round: true,
            unit: null
        }
    }
});