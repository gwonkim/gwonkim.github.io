import React from 'react';
import moment from 'moment';
moment.locale('ko');

type Props = {
  dateString: string
};

const DateFormatter = ({ dateString }: Props) => {
  const date = new Date(dateString);
  const today = moment(new Date(dateString)).format('LL')
  return <span>{dateString}</span>
};

export default DateFormatter;
  