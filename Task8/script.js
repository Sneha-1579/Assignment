function step1() {
    return new Promise(res => {
      setTimeout(() => res("Step 1 done"), 1000);
    });
  }

  function step2() {
    return new Promise(res => {
      setTimeout(() => res("Step 2 done"), 1000);
    });
  }

  function step3() {
    return new Promise(res => {
      setTimeout(() => res("Step 3 done"), 1000);
    });
  }

  async function runSteps() {
    const s1 = await step1();
    document.getElementById("steps").innerHTML += `<li>${s1}</li>`;

    const s2 = await step2();
    document.getElementById("steps").innerHTML += `<li>${s2}</li>`;

    const s3 = await step3();
    document.getElementById("steps").innerHTML += `<li>${s3}</li>`;
  }