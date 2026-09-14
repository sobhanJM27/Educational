import { Endpoints } from '../endpoints';
import { PrivateAuth } from '../../Types/reqAuth';

import { createPrivateAxios } from '../axios';
import { ConsultingLeadType } from '../../Types/apiTypes';

export const addConsultingLead = async (
  auth: PrivateAuth,
  data: ConsultingLeadType,
) => {
  const privateAxios = createPrivateAxios(auth);
  const endpoint = Endpoints.addConsultingLead;
  const response = await privateAxios.post(endpoint, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.status === 200 || response.status === 201) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};
