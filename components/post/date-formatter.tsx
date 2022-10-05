import React from 'react';
import { parseISO, format } from 'date-fns';
import moment from 'moment';
import Style from '../../styles/post.module.scss';
moment.locale('ko');

type Props = {
  dateString: string
};

const DateFormatter = ({ dateString }: Props) => {
  // console.log('dateString', dateString);
  const date = new Date(dateString);
  const today = moment(new Date(dateString)).format('LL')
  return <span>{dateString}</span>
};

export default DateFormatter;
  