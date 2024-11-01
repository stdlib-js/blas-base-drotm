/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

#include "stdlib/blas/base/drotm.h"
#include "stdlib/blas/base/drotm_cblas.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/min_view_buffer_index.h"

/**
* Applies a modified Givens plane rotation.
*
* @param N        number of indexed elements
* @param X        first input array
* @param strideX  X stride length
* @param Y        second input array
* @param strideY  Y stride length
* @param param    parameters for the modified Givens transformation
*/
void API_SUFFIX(c_drotm)( const CBLAS_INT N, double *X, const CBLAS_INT strideX, double *Y, const CBLAS_INT strideY, const double *param ) {
	API_SUFFIX(cblas_drotm)( N, X, strideX, Y, strideY, param );
}

/**
* Applies a modified Givens plane rotation using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param X        first input array
* @param strideX  X stride length
* @param offsetX  starting index for X
* @param Y        second input array
* @param strideY  Y stride length
* @param offsetY  starting index for Y
* @param param    parameters for the modified Givens transformation
*/
void API_SUFFIX(c_drotm_ndarray)( const CBLAS_INT N, double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, double *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY, const double *param ) {
	X += stdlib_strided_min_view_buffer_index( N, strideX, offsetX ); // adjust array pointer
	Y += stdlib_strided_min_view_buffer_index( N, strideY, offsetY ); // adjust array pointer
	API_SUFFIX(cblas_drotm)( N, X, strideX, Y, strideY, param );
}