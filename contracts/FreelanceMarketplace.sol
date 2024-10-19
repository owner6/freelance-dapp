// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FreelanceMarketplace {
    struct Job {
        uint id;
        address payable freelancer;
        address payable client;
        uint price;
        bool completed;
        bool paid;
    }

    uint public jobCount;
    mapping(uint => Job) public jobs;

    event JobCreated(uint id, address client, uint price);
    event JobCompleted(uint id, address freelancer);
    event JobPaid(uint id, address freelancer, uint amount);

    function createJob(uint _price) public {
        jobCount++;
        jobs[jobCount] = Job(jobCount, payable(address(0)), payable(msg.sender), _price, false, false);
        emit JobCreated(jobCount, msg.sender, _price);
    }

    function acceptJob(uint _jobId) public {
        Job storage job = jobs[_jobId];
        require(job.client != address(0), "Job doesn't exist.");
        require(job.freelancer == address(0), "Job already accepted.");
        job.freelancer = payable(msg.sender);
    }

    function completeJob(uint _jobId) public {
        Job storage job = jobs[_jobId];
        require(job.freelancer == msg.sender, "Only the freelancer can complete the job.");
        require(!job.completed, "Job already completed.");
        job.completed = true;
        emit JobCompleted(_jobId, msg.sender);
    }

    function payFreelancer(uint _jobId) public payable {
        Job storage job = jobs[_jobId];
        require(job.client == msg.sender, "Only the client can pay.");
        require(job.completed, "Job is not completed yet.");
        require(!job.paid, "Job already paid.");
        require(msg.value == job.price, "Incorrect amount.");
        job.paid = true;
        job.freelancer.transfer(msg.value);
        emit JobPaid(_jobId, job.freelancer, msg.value);
    }
}
