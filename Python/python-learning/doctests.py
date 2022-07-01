def bounded_avg(nums):
    for n in nums:
        if n < 1 or n > 100:
            raise ValueError("Outside bounds of 1-100")
    return sum(nums) / len(nums)