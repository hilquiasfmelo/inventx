import { hash } from 'bcryptjs';
import { v4 as uuidV4 } from 'uuid';

import { createConnection } from '../index';

async function create(): Promise<void> {
  const connection = await createConnection();

  const id = uuidV4();
  const password = await hash('@#$inventx', 8);

  await connection.query(
    `INSERT INTO USERS(id, name, username, email, password, "isAdmin", created_at, updated_at)
     values('${id}', 'Administrador InventX', 'administrador', 'admin@inventx.com.br', '${password}', true, 'now()', 'now()')
    `,
  );

  await connection.close();
}

create().then(() => console.log('Success!'));

export { create };
