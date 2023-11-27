import React from 'react';
import Spoiler from '../components/Spoiler';
import {
    readFile,
    writeFile,
} from '../helpers/file-helpers';

const DATABASE_PATH = '/src/database.json';

function HitCounter() {
    const db = JSON.parse(readFile(DATABASE_PATH));
    db.hits += 1;
    const count = db.hits;
    writeFile(DATABASE_PATH, JSON.stringify(db));

    return (
        <p>You are visitor number <Spoiler>{count}</Spoiler></p>
    )
}

export default HitCounter;