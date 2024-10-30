import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    role:{
        type: String,
        enum : ['admin','member'],
        default: 'member',
    },
    //domain[], socials,year of clg joining,yaer of passing,stream,uni roll,avatar url, skills[string],events[objectid],projects[objectid],attendance[objectid]
    //schema: members[objectid],domain[string],events,projects,attendance
    //event: event name, date, time, venue, description, members[objectid],attendance[objectid]
    //project: project name, description, members[objectid],projectTags[string],projectLink,projectRepo,projectStatus,progress,projectLead[objectid],deadline
    //attendance: event:objectid(eventnid),members[objectid],time,
},{timestamps: true})

export const UserModel = mongoose.model('User',userSchema);

const attendanceSchema = new mongoose.Schema({
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event', // Reference to the Event model
        required: true,
    },
    members: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', 
            required: true,
        }
    ],
    time: {
        type: Date,
        default: Date.now, 
    }
}, { timestamps: true });

export const AttendanceModel = mongoose.model('Attendance', attendanceSchema);