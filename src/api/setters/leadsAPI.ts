import { PrivateAuth } from '../../Types/reqAuth';
import { createPrivateAxios } from '../axios';
import { Endpoints } from '../endpoints';

export type ConsultingLeadData = {
  fullName: string;
  phoneNumber: string;
};

export const addConsultingLead = async (
  auth: PrivateAuth,
  data: ConsultingLeadData,
) => {
  const privateAxios = createPrivateAxios(auth);
  const endpoint = Endpoints.addConsultingLead;
  const response = await privateAxios.patch(endpoint, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};
