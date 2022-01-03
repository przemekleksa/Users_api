import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { deleteUser, getUserDetails } from '../../store/people/actions';
import { selectUser } from '../../store/people/selectors';

const PersonDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(getUserDetails(id));
    }
    setReload(false);
  }, [id, dispatch, reload]);

  if (!id) {
    return <div>there is no id</div>;
  }
  const handleDelete = (id: any) => {
    dispatch(deleteUser(id));
  };

  return (
    <div className="details">
      <h2>{user.name}</h2>
      <p>email: {user.email}</p>
      <p>gender: {user.gender}</p>
      <p>status: {user.status}</p>
      <button onClick={() => handleDelete(user.id)}>delete</button>
    </div>
  );
};

export default PersonDetails;
