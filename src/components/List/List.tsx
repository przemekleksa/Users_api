import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteUser, postUser } from '../../store/people/actions';
import styles from './List.module.scss';
import { NewUser } from '../../interfaces/Users';

const List = ({ elements }: { elements: any[] }) => {
  console.log(elements);

  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');

  const dispatch = useDispatch();

  const handleDelete = (id: any) => {
    dispatch(deleteUser(id));
  };

  const handleAddUser = (e: any) => {
    e.preventDefault();
    const newUser: NewUser = {
      name: name,
      email: name + Math.random() + '@edu.pl',
      gender: 'female',
      status: 'active',
    };
    console.log(newUser);
    dispatch(postUser(newUser));
  };

  return (
    <>
      <ul className={styles['people-list']}>
        {elements.map((el) => {
          return (
            <div className={styles.container}>
              <li className={styles.element} key={el.id}>
                <NavLink
                  to={`details/${el.id}`}
                  className={styles['element-link']}
                >
                  {el.name || el.title}
                </NavLink>
              </li>
              <button
                onClick={() => handleDelete(el.id)}
                className={styles['del-btn']}
              >
                delete
              </button>
            </div>
          );
        })}
      </ul>
      <form className={styles['add-user']} onSubmit={(e) => handleAddUser(e)}>
        <label>
          <span>UserName: </span>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          <span>Gender: </span>
          <input
            type="radio"
            value="male"
            id="male"
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            value="female"
            id="female"
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="female">Female</label>
        </label>
        <label>
          <span>Status: </span>
          <input
            type="radio"
            value="active"
            id="active"
            onChange={(e) => setStatus(e.target.value)}
          />
          <label htmlFor="active">Active</label>
          <input
            type="radio"
            value="inactive"
            id="inactive"
            onChange={(e) => setStatus(e.target.value)}
          />
          <label htmlFor="inactive">Inactive</label>
        </label>
        <button>Submit</button>
      </form>
    </>
  );
};

export default List;
