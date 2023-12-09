// CompanyInfo.js
import { client } from '../lib/client';

export async function fetchCompanyInfo() {
  try {
    const query = `*[_type == "companyinfo"]`;

    const companyInfoList = await client.fetch(query);

    if (companyInfoList.length > 0) {
      const formattedData = {
        name: companyInfoList[0].name,
        email: companyInfoList[0].email,
        phone: companyInfoList[0].phone
      };

      return formattedData;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching company information:", error);
    return null;
  }
}
