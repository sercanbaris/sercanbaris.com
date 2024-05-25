import "./About.css";

const user = {
  name: "Barbara Palvin",
  imageUrl:
    'https://fashionrepublicmagazine.com/wp-content/uploads/2023/05/model-face.jpg',
  imageSize: 90,
};

export default function About() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
            width:user.imageSize,
            height:user.imageSize,
        }}
      />
    </>
  );
}
