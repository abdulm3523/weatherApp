const locationData = [
  { location: "Dhaka", latitude: 23.8103, longitude: 90.4125 },
  { location: "Chittagong", latitude: 22.3475, longitude: 91.8123 },
  { location: "Sylhet", latitude: 24.8949, longitude: 91.8687 },
  { location: "Khulna", latitude: 22.8456, longitude: 89.5403 },
  { location: "Rajshahi", latitude: 24.3636, longitude: 88.6241 },
  { location: "Barisal", latitude: 22.701, longitude: 90.3535 },
  { location: "Rangpur", latitude: 25.7439, longitude: 89.2752 },
  { location: "Mymensingh", latitude: 24.7471, longitude: 90.4203 },
  { location: "Comilla", latitude: 23.4578, longitude: 91.2049 },
  { location: "Jessore", latitude: 23.1683, longitude: 89.2083 },
  { location: "Cox's Bazar", latitude: 21.4272, longitude: 92.0058 },
  { location: "Narayanganj", latitude: 23.6238, longitude: 90.5 },
  { location: "Gazipur", latitude: 23.9999, longitude: 90.4203 },
  { location: "Bogra", latitude: 24.8467, longitude: 89.3771 },
  { location: "Dinajpur", latitude: 25.6279, longitude: 88.6355 },
  { location: "Tangail", latitude: 24.2513, longitude: 89.92 },
  { location: "Pabna", latitude: 23.9985, longitude: 89.2333 },
  { location: "Noakhali", latitude: 22.7896, longitude: 91.0995 },
  { location: "Satkhira", latitude: 22.7158, longitude: 89.0706 },
  { location: "Faridpur", latitude: 23.6074, longitude: 89.84 },
  // India
  { location: "Delhi", latitude: 28.613939, longitude: 77.209023 },
  { location: "Mumbai", latitude: 19.07609, longitude: 72.877426 },
  { location: "Bangalore", latitude: 12.971599, longitude: 77.594566 },
  { location: "Chennai", latitude: 13.08268, longitude: 80.270721 },
  { location: "Kolkata", latitude: 22.572645, longitude: 88.363892 },

  // United Kingdom
  { location: "London", latitude: 51.507351, longitude: -0.127758 },
  { location: "Manchester", latitude: 53.480759, longitude: -2.242631 },
  { location: "Birmingham", latitude: 52.486243, longitude: -1.890401 },
  { location: "Glasgow", latitude: 55.864239, longitude: -4.251806 },
  { location: "Edinburgh", latitude: 55.953251, longitude: -3.188267 },

  // United States
  { location: "New York", latitude: 40.712776, longitude: -74.005974 },
  { location: "Los Angeles", latitude: 34.052235, longitude: -118.243683 },
  { location: "Chicago", latitude: 41.878113, longitude: -87.629799 },
  { location: "Houston", latitude: 29.760427, longitude: -95.369804 },
  { location: "San Francisco", latitude: 37.774929, longitude: -122.419418 },

  // Saudi Arabia
  { location: "Riyadh", latitude: 24.713552, longitude: 46.675297 },
  { location: "Jeddah", latitude: 21.485811, longitude: 39.192505 },
  { location: "Mecca", latitude: 21.389082, longitude: 39.85791 },
  { location: "Medina", latitude: 24.524654, longitude: 39.569184 },
  { location: "Dammam", latitude: 26.420684, longitude: 50.088794 },

  // Dubai (UAE)
  { location: "Dubai", latitude: 25.276987, longitude: 55.296249 },
  { location: "Abu Dhabi", latitude: 24.453884, longitude: 54.377344 },
  { location: "Sharjah", latitude: 25.346255, longitude: 55.420931 },

  // Denmark
  { location: "Copenhagen", latitude: 55.676098, longitude: 12.568337 },
  { location: "Aarhus", latitude: 56.162939, longitude: 10.203921 },
  { location: "Odense", latitude: 55.403756, longitude: 10.40237 },
  { location: "Aalborg", latitude: 57.04882, longitude: 9.921747 },
  { location: "Esbjerg", latitude: 55.476466, longitude: 8.459405 },
  { location: "India", latitude: 20.593684, longitude: 78.96288 },
  { location: "Afghanistan", latitude: 33.93911, longitude: 67.709953 },
  { location: "Albania", latitude: 41.153332, longitude: 20.168331 },
  { location: "Algeria", latitude: 28.033886, longitude: 1.659626 },
  { location: "Andorra", latitude: 42.546245, longitude: 1.601554 },
  { location: "Angola", latitude: -11.202692, longitude: 17.873887 },
  { location: "Argentina", latitude: -38.416097, longitude: -63.616672 },
  { location: "Armenia", latitude: 40.069099, longitude: 45.038189 },
  { location: "Australia", latitude: -25.274398, longitude: 133.775136 },
  { location: "Austria", latitude: 47.516231, longitude: 14.550072 },
  { location: "Bangladesh", latitude: 23.684994, longitude: 90.356331 },
  { location: "Belgium", latitude: 50.503887, longitude: 4.469936 },
  { location: "Brazil", latitude: -14.235004, longitude: -51.92528 },
  { location: "Canada", latitude: 56.130366, longitude: -106.346771 },
  { location: "China", latitude: 35.86166, longitude: 104.195397 },
  { location: "Denmark", latitude: 56.26392, longitude: 9.501785 },
  { location: "Egypt", latitude: 26.820553, longitude: 30.802498 },
  { location: "France", latitude: 46.603354, longitude: 1.888334 },
  { location: "Germany", latitude: 51.165691, longitude: 10.451526 },
  { location: "India", latitude: 20.593684, longitude: 78.96288 },
  { location: "Indonesia", latitude: -0.789275, longitude: 113.921327 },
  { location: "Italy", latitude: 41.87194, longitude: 12.56738 },
  { location: "Japan", latitude: 36.204824, longitude: 138.252924 },
  { location: "Mexico", latitude: 23.634501, longitude: -102.552784 },
  { location: "Nepal", latitude: 28.394857, longitude: 84.124008 },
  { location: "Netherlands", latitude: 52.132633, longitude: 5.291266 },
  { location: "Pakistan", latitude: 30.375321, longitude: 69.345116 },
  { location: "Philippines", latitude: 12.879721, longitude: 121.774017 },
  { location: "Russia", latitude: 61.52401, longitude: 105.318756 },
  { location: "Saudi Arabia", latitude: 23.885942, longitude: 45.079162 },
  { location: "South Africa", latitude: -30.559482, longitude: 22.937506 },
  { location: "Spain", latitude: 40.463667, longitude: -3.74922 },
  { location: "Sri Lanka", latitude: 7.873054, longitude: 80.771797 },
  {
    location: "United Arab Emirates",
    latitude: 23.424076,
    longitude: 53.847818,
  },
  { location: "United Kingdom", latitude: 55.378051, longitude: -3.435973 },
  { location: "United States", latitude: 37.09024, longitude: -95.712891 },
];

const getLocation = () => {
  return locationData;
};

const findLocationByName = (location) => {
  if (!location) return null;

  const fetchLocation = locationData.filter(
    (list) => list.location.toLowerCase() === location.toLowerCase()
  );

  if (fetchLocation.length > 0) {
    return fetchLocation[0];
  } else {
    const defaultValue = {
      location: "",
      latitude: "",
      longitude: "",
    };
  }
};

export { findLocationByName, getLocation };
