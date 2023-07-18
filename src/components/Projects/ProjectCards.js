import React from "react";
import { Avatar, Card } from 'antd';
import { AiOutlineGithub, } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { BsFillShareFill } from "react-icons/bs";

const { Meta } = Card;

function ProjectCards(props) {
  const { image, title, description } = props;

  return (
    <Card
      style={{
        width: 300,
      }}
      cover={
        <img
          alt="example"
          src={image}
        />
      }
      actions={[
        <AiOutlineGithub key="setting" style={{ fontSize: '24px' }} />,
        <CgWebsite key="edit" style={{ fontSize: '24px' }} />,
        <BsFillShareFill key="ellipsis" style={{ fontSize: '24px' }} />,
      ]}
    >
      <Meta
        avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
        title={title}
        description={description}
      />
    </Card>
  );
}

export default ProjectCards;
