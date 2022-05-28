import { useParams } from "react-router-dom";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Wooded Grove",
    description: "Dimly lit wooded grove.",
    imageUrl:
      "https://images.unsplash.com/photo-1647010285526-931fddcbfc43?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
    address: "1624 4th St SE, Bemidji, MN 56601",
    location: {
      lat: 47.4550408,
      lng: -94.8406445,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Wooded Grove",
    description: "Dimly lit wooded grove.",
    imageUrl:
      "https://images.unsplash.com/photo-1647010285526-931fddcbfc43?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
    address: "1624 4th St SE, Bemidji, MN 56601",
    location: {
      lat: 47.4550408,
      lng: -94.8406445,
    },
    creator: "u2",
  },
];

const UpdatePlace = (props) => {
  const placeId = useParams().placeId;
  const selectedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  if (!selectedPlace) {
    return (
      <div className="center">
        <h2>Could not find place</h2>
      </div>
    );
  }
  return <h2>Update Place</h2>;
};

export default UpdatePlace;
