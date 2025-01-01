import React from 'react';
import ReactPlayer from 'react-player';
import Layout from "../components/leason/Layout";

const LeasonPage: React.FC = () => {
  const videoUrl = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4';

  return (
    <Layout>
      <div>
        <h1>Lesson Video</h1>
        <ReactPlayer
          url={videoUrl}
          controls={true}
          playing={false}
          width="100%"
          height="auto"
        />
      </div>
    </Layout>
  );
};

export default LeasonPage;
