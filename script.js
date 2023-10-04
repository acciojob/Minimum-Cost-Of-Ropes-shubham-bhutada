function calculateMinCost() {
  //your code here
  const inputElement = document.getElementById("rope-lengths");
  const inputString = inputElement.value;
  const ropeLengths = inputString.split(",").map(Number);

  // Create a min-heap to store the rope lengths
  const minHeap = new MinHeap();

  // Add all rope lengths to the min-heap
  ropeLengths.forEach((length) => {
    minHeap.insert(length);
  });

  // Initialize the total cost
  let totalCost = 0;

  // Continue until there's only one rope left in the heap
  while (minHeap.size() > 1) {
    // Remove the two smallest ropes from the heap
    const smallest1 = minHeap.extractMin();
    const smallest2 = minHeap.extractMin();

    // Calculate the cost of merging them and add it to the total cost
    const cost = smallest1 + smallest2;
    totalCost += cost;

    // Add the merged rope back to the heap
    minHeap.insert(cost);
  }

  // Display the minimum cost in the result div
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = "Minimum Cost: " + totalCost;
  
  
}  
