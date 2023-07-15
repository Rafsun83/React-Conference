type Conferences = {
    id: string;
    name: string;
    startDate: string;
    slogan: string;
    organizers: {
      name: string;
      aboutShort: string;
      image: {
        url: string;
      };
      noPhotography: boolean;
    }[];
    speakers: {
      name: string;
      aboutShort: string;
      image: {
        url: string;
      };
      social: {
        twitter: string;
        linkedin: string;
        github: string;
        googleMaps: string;
      };
    }[];
    schedules: {
      day: string;
      description: string;
      intervals: {
        title: string;
        begin: string;
        end: string;
      }[];
    }[];
    sponsors: {
      name: string;
      aboutShort: string;
      image: {
        url: string;
      };
    }[];
    goldSponsors: {
      image: {
        url: string;
      };
    }[];
    silverSponsors: {
      image: {
        url: string;
      };
    }[];
    bronzeSponsors: {
      image: {
        url: string;
      };
    }[];
  }
  
  type ConferencesDataTypes = {
    conferences: Conferences[] | [];
  }
  