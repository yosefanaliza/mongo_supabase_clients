import Riddle from '../models/Riddle.js';

export const getRiddles = async () => {
    try {
        const riddles = await Riddle.findAll();
        return riddles;
    } catch (error) {
        console.error('DAL: Error fetching riddles:', error);
        throw error;
    }
};

export const createRiddle = async (riddleData) => {
    try {
        const newRiddle = await Riddle.create(riddleData);
        return newRiddle;
    } catch (error) {
        console.error('DAL: Error creating riddle:', error);
        throw error;
    }
};

export const getRiddleById = async (id) => {
    try {
        const riddle = await Riddle.findByPk(id);
        return riddle;
    } catch (error) {
        console.error('DAL: Error fetching riddle by ID:', error);
        throw error;
    }
};

export const updateRiddle = async (id, updateData) => {
    try {
        const [updatedRowsCount] = await Riddle.update(updateData, {
            where: { id },
            returning: true
        });
        
        if (updatedRowsCount === 0) {
            return null;
        }
        
        // Get the updated riddle
        const updatedRiddle = await Riddle.findByPk(id);
        return updatedRiddle;
    } catch (error) {
        console.error('DAL: Error updating riddle:', error);
        throw error;
    }
};

export const deleteRiddle = async (id) => {
    try {
        const deletedRowsCount = await Riddle.destroy({
            where: { id }
        });
        
        return deletedRowsCount > 0;
    } catch (error) {
        console.error('DAL: Error deleting riddle:', error);
        throw error;
    }
};