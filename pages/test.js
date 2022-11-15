import React from 'react';

export async function getServerSideProps() {
  try {
    const response = await fetch('http://localhost:3000/controllers/posts');
    const posts = await response.json();

    console.log({ posts });

    return {
      props: { posts: JSON.parse(JSON.stringify(posts)) },
    };
  } catch (e) {
    console.error(e);
  }
}

const test = () => (

  <div>TEst</div>
);

export default test;
