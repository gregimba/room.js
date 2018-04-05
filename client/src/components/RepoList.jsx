import React from 'react';

const RepoList = props => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <ul>
      {props.repos.map(item => (
        <li key={item.name}>
          <a href={`https://github.com/${item.owner}/${item.name}`}>{item.name} with {item.stargazers_count} stars</a>
        </li>
      ))}
    </ul>
  </div>
);

export default RepoList;
