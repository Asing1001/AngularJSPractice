/**
 * Created by andy.chen on 2015/2/6.
 */
angular.module("customFilters", [])
    .filter("unique", function () {
        return function (data, propertyName) {
            if (angular.isArray(data) && angular.isString(propertyName)) {
                var results = [];
                var keys = {};
                for (var i = 0; i < data.length; i++) {
                    var val = data[i][propertyName];
                    if (angular.isUndefined(keys[val])) {
                        keys[val] = true;
                        results.push(val);
                    }
                }
                return results;
            } else {
                return data;
            }
        }
    })
    .filter("pageCount", function (SizePerPage) {
        return function (data) {
            if (angular.isArray(data)) {
                var PageCount = Math.ceil(data.length / SizePerPage);
                var result = [];
                for (var i = 1; i <= PageCount; i++) {
                    result.push(i);
                }
                return result;
            } else {
                return data;
            }
        }
    })
    .filter("productInPage", function (SizePerPage) {
        return function (data, selectedPage) {
            if (angular.isArray(data)) {
                //var result = [];
                var start_Index = (selectedPage - 1) * SizePerPage;
                if (data.length < start_Index) {
                    return [];
                }
                else {
                    //return data.slice(start_Index, start_Index + SizePerPage);
                    //return data.splice(start_Index, SizePerPage);
                    return $filter("limitTo")(data.splice(start_Index), SizePerPage);
                }
            } else {
                return data;
            }
        }
    })

