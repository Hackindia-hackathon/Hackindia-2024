import axios from 'axios';

const BASE_URL = 'http://localhost:3000'; // Backend URL

// Submit Application API function
export const submitApplication = async (applicationData, senderAddress) => {
    try {
        const response = await axios.post(`${BASE_URL}/submit-application`, {
            applicationData,
            senderAddress
        });
        return response.data;
    } catch (error) {
        console.error('Error submitting application:', error);
        throw error;
    }
};

// Check Admission Status API function
export const getAdmissionStatus = async (appId) => {
    try {
        const response = await axios.get(`${BASE_URL}/admission-status/${appId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching admission status:', error);
        throw error;
    }
};
