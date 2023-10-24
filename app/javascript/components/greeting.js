import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomGreeting } from '../redux/greetingSlice';

export default function Greeting() {
  const dispatch = useDispatch();
  const greetings = useSelector((state) => state.greetings.message);
  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  return (
  <div>{greetings}</div>
  );
}