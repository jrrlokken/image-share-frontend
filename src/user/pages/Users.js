import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "user1",
      name: "Jimmy Chou",
      image:
        "https://imgs.search.brave.com/eppHr5UOKV2Nl62vvjVA8VDROOUdKH-36WZu-Ae5Ziw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9kMmZ4/bjFkN2ZzZGVlby5j/bG91ZGZyb250Lm5l/dC9rZW50dWNreWxp/dmluZy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjAvMTEv/MjUxMDI4MjgvQWRv/YmVTdG9ja18xODYz/OTY2NjkuanBn",
      places: 4,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
