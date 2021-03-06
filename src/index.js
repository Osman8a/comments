import ReactDom from 'react-dom';
import React from 'react';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => (
  <div className="ui container comments">
    <ApprovalCard>
      <div>
        <h4>Warning</h4>
        Are you sure you want to do this?
      </div>
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail
        author="Osman"
        timeAgo="Today at 6:00 PM"
        comment="Nice blog post"
        avatar={faker.image.avatar()}
      />
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail
        author="Sam"
        timeAgo="Today at 8:00 AM"
        comment="I Like Node and React"
        avatar={faker.image.avatar()}
      />
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail
        author="Jane"
        timeAgo="Yesterday at 3:55 PM"
        comment="I like the writing"
        avatar={faker.image.avatar()}
      />
    </ApprovalCard>
  </div>
);

ReactDom.render(<App />, document.querySelector('#root'));
