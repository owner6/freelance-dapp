const FreelanceMarketplace = artifacts.require("FreelanceMarketplace");

let expect;

(async () => {
  expect = (await import('chai')).expect;
})();

contract("FreelanceMarketplace", accounts => {
  const [client, freelancer] = accounts;

  it("повинен створювати нове замовлення", async () => {
    const marketplace = await FreelanceMarketplace.deployed();
    await marketplace.createJob(1000, { from: client });
    const job = await marketplace.jobs(1);

    expect(job.id.toNumber()).to.equal(1);
    expect(job.price.toNumber()).to.equal(1000);
    expect(job.client).to.equal(client);
    expect(job.completed).to.be.false;
    expect(job.paid).to.be.false;
  });

  it("повинен дозволити фрілансеру прийняти замовлення", async () => {
    const marketplace = await FreelanceMarketplace.deployed();
    await marketplace.acceptJob(1, { from: freelancer });
    const job = await marketplace.jobs(1);

    expect(job.freelancer).to.equal(freelancer);
  });

  it("повинен дозволити фрілансеру завершити замовлення", async () => {
    const marketplace = await FreelanceMarketplace.deployed();
    await marketplace.completeJob(1, { from: freelancer });
    const job = await marketplace.jobs(1);

    expect(job.completed).to.be.true;
  });

  it("повинен дозволити клієнту оплатити замовлення", async () => {
    const marketplace = await FreelanceMarketplace.deployed();
    const initialBalance = web3.utils.toBN(await web3.eth.getBalance(freelancer));

    await marketplace.payFreelancer(1, { from: client, value: 1000 });
    const job = await marketplace.jobs(1);

    expect(job.paid).to.be.true;

    // Перевірка, чи отримав фрілансер оплату
    const finalBalance = web3.utils.toBN(await web3.eth.getBalance(freelancer));
    const balanceDifference = finalBalance.sub(initialBalance);
    expect(balanceDifference.toNumber()).to.equal(1000);
  });

});
