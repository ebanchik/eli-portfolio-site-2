import { useState } from 'react';
import Calendar from 'react-calendar';
import Gist from "react-gist";

export function WorkJournal() {
  const [value, onChange] = useState(new Date());
  const maxDate = new Date();
  const minDetail = "year"


  
  return (
    <section className="work-journal" id="work-journal">
      <h1 className="work-journal-header">Work Journal Logs</h1>
      {/* <div className="work-journal-calendar">
        <Calendar onChange={onChange} value={value} maxDate={maxDate} minDetail={minDetail}/>
      </div> */}
      <div className="journal">
        {/* <Gist id="a1e501e7745aa4424ef550c21b1ee240" /> */}
      </div>
    </section>
  );
}