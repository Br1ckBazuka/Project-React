/* eslint-disable */
import React, { Fragment } from 'react';
import TabBar from './TabBar';
import TabBarItem from './TabBarItem';

const Sandbox = () => (
  <Fragment>

    {/*
      Example of Usage Syntax
      <TabBar>
        <TabBarItem label='tab1'>Content</TabBarItem>
        <TabBarItem label='tab2'>Content</TabBarItem>
        <TabBarItem label='tab3'>Content</TabBarItem>
      </TabBar>
    */}

    
    
    <TabBar vertical>
      <TabBarItem label="Статья 1">
        <h2>Статья 1</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        
      </TabBarItem>
      <TabBarItem label="Статья 2">
        <h2>Статья 2</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </TabBarItem>
      <TabBarItem label="Статья 3">
        <h2>Статья 3</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </TabBarItem>
    </TabBar>

  </Fragment>
);

export default Sandbox;
/* eslint-enable */
